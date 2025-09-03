import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Upload, Globe, FileText, Plus } from "lucide-react";

export default function KnowledgeBasePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Source
          </Button>
        </div>
        <p className="text-muted-foreground">
          Manage your knowledge base for RAG capabilities.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Documents
              </CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                Documents in knowledge base
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upload PDF</CardTitle>
              <CardDescription>
                Upload PDF documents to your knowledge base.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md p-10">
                <Upload className="h-10 w-10 text-muted-foreground/50" />
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Drag and drop PDF files here, or click to select files
                </p>
                <Button className="mt-4" variant="outline">
                  Select Files
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Website</CardTitle>
              <CardDescription>
                Add website URLs to scrape for your knowledge base.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md p-10">
                <Globe className="h-10 w-10 text-muted-foreground/50" />
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Enter website URLs to scrape content for your knowledge base
                </p>
                <Button className="mt-4" variant="outline">
                  Add URL
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manual Entry</CardTitle>
              <CardDescription>
                Manually enter text for your knowledge base.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md p-10">
                <FileText className="h-10 w-10 text-muted-foreground/50" />
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Manually enter or paste text to add to your knowledge base
                </p>
                <Button className="mt-4" variant="outline">
                  Create Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Knowledge Base Documents</CardTitle>
            <CardDescription>
              View and manage your knowledge base documents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10">
              <Database className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h3 className="mt-4 text-lg font-semibold">No documents yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Add documents to your knowledge base to get started.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}