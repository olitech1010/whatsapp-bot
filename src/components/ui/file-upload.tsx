"use client";

import { UploadCloud, X } from "lucide-react";
import * as React from "react";
import { useDropzone, type DropzoneOptions, FileRejection } from "react-dropzone";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const variants = {
  base: "relative rounded-md flex justify-center items-center flex-col cursor-pointer min-h-[150px] border border-dashed border-gray-400 dark:border-gray-300 transition-colors duration-200 ease-in-out",
  active: "border-2",
  disabled: "bg-gray-200 cursor-default pointer-events-none bg-opacity-30",
  accept: "border border-blue-500 bg-blue-500 bg-opacity-10",
  reject: "border border-red-700 bg-red-700 bg-opacity-10",
};

type InputProps = {
  width?: number;
  height?: number;
  className?: string;
  value?: File[];
  onChange?: (files: File[]) => void | Promise<void>;
  onFilesAdded?: (addedFiles: File[]) => void | Promise<void>;
  disabled?: boolean;
  dropzoneOptions?: Omit<DropzoneOptions, "disabled">;
  showPreview?: boolean;
};

const ERROR_MESSAGES = {
  fileTooLarge(maxSize: number) {
    return `The file is too large. Max size is ${formatFileSize(maxSize)}.`;
  },
  fileInvalidType() {
    return "Invalid file type.";
  },
  tooManyFiles(maxFiles: number) {
    return `You can only add ${maxFiles} file(s).`;
  },
  fileNotSupported() {
    return "The file is not supported.";
  },
};

const SingleImagePreview = ({
  file,
  onRemove,
}: {
  file: File;
  onRemove: (file: File) => void;
}) => {
  const [preview, setPreview] = React.useState<string>("");

  React.useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="relative h-20 w-20 rounded-md">
      <img
        src={preview}
        alt={file.name}
        className="h-full w-full rounded-md object-contain"
      />
      <Button
        type="button"
        variant="destructive"
        size="icon"
        className="absolute -right-2 -top-2 h-5 w-5 rounded-full"
        onClick={() => onRemove(file)}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

const SingleFilePreview = ({
  file,
  onRemove,
}: {
  file: File;
  onRemove: (file: File) => void;
}) => {
  return (
    <div className="flex items-center gap-2 rounded-md border p-2">
      <div className="flex-1 truncate">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {file.name}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {formatFileSize(file.size)}
        </p>
      </div>
      <Button
        type="button"
        variant="destructive"
        size="icon"
        className="h-5 w-5"
        onClick={() => onRemove(file)}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function FileUpload({
  width,
  height,
  value,
  className,
  dropzoneOptions,
  disabled,
  onChange,
  onFilesAdded,
  showPreview = true,
}: InputProps) {
  const [files, setFiles] = React.useState<File[]>(value || []);
  const [rejected, setRejected] = React.useState<FileRejection[]>([]);
  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles?.length) {
        const newFiles = [...files, ...acceptedFiles];
        setFiles(newFiles);
        if (onChange) onChange(newFiles);
        if (onFilesAdded) onFilesAdded(acceptedFiles);
      }

      if (rejectedFiles?.length) {
        setRejected((prev) => [...prev, ...rejectedFiles]);
      }
    },
    [files, onChange, onFilesAdded]
  );

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      disabled,
      // Type assertion to fix compatibility issue
      ...(dropzoneOptions as any),
    });

  React.useEffect(() => {
    if (value) {
      setFiles(value);
    }
  }, [value]);

  const removeFile = (file: File) => {
    const newFiles = files.filter((f) => f !== file);
    setFiles(newFiles);
    if (onChange) onChange(newFiles);
  };

  const removeRejected = (index: number) => {
    setRejected((prev) => prev.filter((_, i) => i !== index));
  };

  const rootClassName = React.useMemo(() => {
    return cn(
      variants.base,
      isDragActive && variants.active,
      isDragAccept && variants.accept,
      isDragReject && variants.reject,
      disabled && variants.disabled,
      className
    );
  }, [isDragActive, isDragAccept, isDragReject, disabled, className]);

  return (
    <div>
      <div
        {...getRootProps({
          className: rootClassName,
          style: { width, height },
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center text-xs text-gray-400">
          <UploadCloud className="mb-1 h-7 w-7" />
          <div className="text-gray-400">
            Drag & drop files here, or click to select files
          </div>
        </div>
      </div>

      {/* Preview */}
      {showPreview && (
        <div className="mt-1">
          {/* Accepted files */}
          {files.length > 0 && (
            <div className="mt-2">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Uploaded files
              </p>
              <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6">
                {files.map((file, index) => (
                  <div key={index}>
                    {file.type.startsWith("image/") ? (
                      <SingleImagePreview file={file} onRemove={removeFile} />
                    ) : (
                      <SingleFilePreview file={file} onRemove={removeFile} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rejected Files */}
          {rejected.length > 0 && (
            <div className="mt-2">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Rejected files
              </p>
              <div className="mt-2 space-y-1">
                {rejected.map(({ file, errors }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border border-red-400 bg-red-400 bg-opacity-10 px-3 py-2 text-xs"
                  >
                    <div>
                      <p className="text-gray-800 dark:text-gray-100">
                        {file.name}
                      </p>
                      <p className="text-red-500">
                        {errors.map((error) => {
                          if (error.code === "file-too-large") {
                            return ERROR_MESSAGES.fileTooLarge(
                              dropzoneOptions?.maxSize || 0
                            );
                          }
                          if (error.code === "file-invalid-type") {
                            return ERROR_MESSAGES.fileInvalidType();
                          }
                          if (error.code === "too-many-files") {
                            return ERROR_MESSAGES.tooManyFiles(
                              dropzoneOptions?.maxFiles || 0
                            );
                          }
                          return ERROR_MESSAGES.fileNotSupported();
                        })}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="h-5 w-5"
                      onClick={() => removeRejected(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}