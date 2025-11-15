"use client";

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Mail, User, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactDialog({ trigger }: { trigger: React.ReactNode }) {
  const { toast } = useToast();
  const email = 'shaikmohammeddsameer25@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: 'Copied to clipboard!',
      description: 'The email address has been copied.',
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            Feel free to reach out via email.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Sameer</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <a href={`mailto:${email}`} className="text-sm hover:underline">
              {email}
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto h-8 w-8"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy email</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
