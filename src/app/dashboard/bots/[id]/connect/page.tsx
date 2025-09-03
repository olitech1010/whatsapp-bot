import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";

export default function ConnectWhatsAppPage({ params }: { params: { id: string } }) {
  // In a real implementation, this would fetch the QR code from the backend
  const qrCodeValue = "https://example.com/whatsapp-qr-code";
  const botId = params.id;

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Connect WhatsApp</h1>
        <p className="text-muted-foreground">
          Connect your bot to WhatsApp by scanning the QR code.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Scan QR Code</CardTitle>
            <CardDescription>
              Open WhatsApp on your phone, tap Menu or Settings and select WhatsApp Web.
              Point your phone to this screen to capture the QR code.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <div className="border border-[hsl(var(--border))] p-4 rounded-lg">
              <QRCodeSVG value={qrCodeValue} size={256} />
            </div>
            <p className="text-sm text-muted-foreground">
              QR code will refresh in <span className="font-medium">60</span> seconds
            </p>
            <Button variant="outline">Refresh QR Code</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connection Status</CardTitle>
            <CardDescription>
              Current status of your WhatsApp connection.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <p>Waiting for scan</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
            <CardDescription>
              Follow these steps to connect your WhatsApp account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open WhatsApp on your phone</li>
              <li>Tap Menu or Settings and select WhatsApp Web</li>
              <li>Point your phone to this screen to capture the QR code</li>
              <li>Keep your phone connected to the internet while using WhatsApp Web</li>
              <li>Your bot will now be able to send and receive messages through this WhatsApp account</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}