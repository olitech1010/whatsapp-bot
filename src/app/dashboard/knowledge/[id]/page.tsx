import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Trash2, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  const documentId = params.id;
  
  // In a real implementation, this would fetch the document data from the database
  const documentData = {
    id: documentId,
    title: "Product Manual.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadedAt: "2023-06-15T10:30:00Z",
    status: "processed",
    chunks: 24,
    content: "This is a sample product manual that contains information about our product. It includes installation instructions, usage guidelines, troubleshooting tips, and maintenance procedures. The manual is designed to help users get the most out of their product experience.",
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard/knowledge">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">{documentData.title}</h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" /> Reprocess
            </Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Document Information</CardTitle>
              <CardDescription>
                Details about this document.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{documentData.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-medium">{documentData.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uploaded:</span>
                  <span className="font-medium">
                    {new Date(documentData.uploadedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium capitalize">{documentData.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chunks:</span>
                  <span className="font-medium">{documentData.chunks}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Document Preview</CardTitle>
              <CardDescription>
                Preview of the document content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 bg-muted/50">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{documentData.title}</span>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {documentData.content}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Associated Bots</CardTitle>
            <CardDescription>
              Bots that use this document in their knowledge base.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10">
              <p className="text-muted-foreground">No bots are currently using this document.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}