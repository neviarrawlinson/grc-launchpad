import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hands-on Labs | GRC LaunchPad",
  description: "Practice real-world Governance, Risk, and Compliance tasks to build your skills and portfolio.",
}

export default function LabsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">🛠️ Hands-on Labs</h1>
        <p className="text-lg text-muted-foreground">
          Practice real-world GRC tasks to gain experience and build your portfolio. These labs mirror the responsibilities of GRC analysts, auditors, and governance professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lab 1 */}
        <Card>
          <CardHeader>
            <CardTitle>📊 Lab 1: Create a Risk Register</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Learn how to create and manage a risk register using Excel or Google Sheets. You'll identify risks, assign severity scores, and document mitigation plans.
            </p>
            <Button asChild>
              <a href="/labs/risk-register-template.xlsx" download>
                Download Risk Register Template
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Lab 2 */}
        <Card>
          <CardHeader>
            <CardTitle>🔁 Lab 2: Change Management Workflow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Simulate the process of submitting and reviewing a change request using a real-world workflow. Follow governance steps from request to approval.
            </p>
            <Button asChild>
              <a href="/labs/change-management-checklist.pdf" download>
                Download Governance Checklist
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Lab 3 */}
        <Card>
          <CardHeader>
            <CardTitle>📄 Lab 3: Root Cause Analysis (RCA)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Learn how to conduct an RCA using a real incident scenario. Choose from the 5 Whys, Fishbone, or Postmortem method and generate an audit-ready report.
            </p>
            <Button asChild>
              <a href="/labs/rca-template.docx" download>
                Download RCA Template
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-muted border border-dashed">
          <CardHeader>
            <CardTitle>📬 Want Feedback?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Finished your labs? Submit your completed work to get reviewed by a GRC professional (coming soon).
            </p>
            <Button disabled variant="outline">
              Submit Labs (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
