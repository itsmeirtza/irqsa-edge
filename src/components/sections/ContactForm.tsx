import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceGroups } from "@/data/site";

const budgets = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    // Front-end only for now: connect an email service or database when ready.
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setService("");
      setBudget("");
      toast.success("Thanks — your enquiry is on its way.", {
        description: "We reply to every project request within one business day.",
      });
    }, 700);
  };


  return (
    <Reveal className="card-rim rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
      <h2 className="text-2xl font-semibold text-foreground">Tell us about your project</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Share a few details and we'll respond with scope, timeline and a fixed quote.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required placeholder="Jane Cooper" autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="company">Company (optional)</Label>
            <Input id="company" name="company" placeholder="Company name" autoComplete="organization" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input id="phone" name="phone" placeholder="+1 000 000 0000" autoComplete="tel" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="service">Service needed</Label>
            <Select value={service} onValueChange={setService} name="service">
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceGroups.map((g) => (
                  <SelectItem key={g.slug} value={g.title}>
                    {g.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="budget">Estimated budget</Label>
            <Select value={budget} onValueChange={setBudget} name="budget">
              <SelectTrigger id="budget">
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Project details</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you building, who is it for, and when do you need it live?"
          />
        </div>

        <Button type="submit" variant="premium" size="xl" disabled={submitting} className="w-full">
          {submitting ? "Sending…" : "Send enquiry"} <Send className="size-4" />
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We never share your details. Replies within one business day.
        </p>
      </form>
    </Reveal>
  );
}
