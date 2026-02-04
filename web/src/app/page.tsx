import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">InvestInsight</h1>
            <div className="flex items-center gap-6">
              <a
                href="/dashboard"
                className="text-sm font-medium hover:underline"
              >
                Dashboard
              </a>
              <a
                href="/data-confirmation"
                className="text-sm font-medium hover:underline"
              >
                Data Confirmation
              </a>
              <Button variant="ghost" size="sm">
                Maintenance
              </Button>
              <Button variant="ghost" size="sm">
                User
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Current Batch Status Section */}
          <section aria-label="Current Batch Status" className="space-y-4">
            <h2 className="text-xl font-semibold">Current Batch Status</h2>
            <Card className="p-6">
              <p className="text-muted-foreground">
                Batch status information will appear here.
              </p>
            </Card>
          </section>

          {/* Quick Navigation Section */}
          <section aria-label="Quick Navigation" className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Navigation</h2>
            <Card className="p-6">
              <p className="text-muted-foreground">
                Quick navigation options will appear here.
              </p>
            </Card>
          </section>

          {/* Batch History Section */}
          <section aria-label="Batch History" className="space-y-4">
            <h2 className="text-xl font-semibold">Batch History</h2>
            <Card className="p-6">
              <p className="text-muted-foreground">
                Batch history table will appear here.
              </p>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
