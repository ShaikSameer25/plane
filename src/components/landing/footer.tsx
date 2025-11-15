import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DroneLogo } from '@/components/icons';
import { Linkedin, Twitter } from 'lucide-react';
import { ContactDialog } from './contact-dialog';

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <DroneLogo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">VyomGarud</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Precision Engineering. Advanced Autonomy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="font-semibold text-foreground">Solutions</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#capabilities"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Surveillance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#capabilities"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#capabilities"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Mapping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-foreground">
                Ready to Elevate Your Operations?
              </h3>
              <p className="mt-2 mb-4 text-sm text-muted-foreground">
                Get in touch with our team to discuss your mission requirements.
              </p>
              <ContactDialog trigger={<Button>Contact Sales</Button>} />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shaik mohammed sameer. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shaik-mohammed-sameer-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
