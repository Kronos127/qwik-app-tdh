import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">About Us</h3>
            <p class="text-sm mb-4">
              Terris Draheim Outdoor is a furniture store that specializes in outdoor furniture. We are committed to providing high-quality furniture that is both beautiful and durable.
            </p>
            <p class="text-sm">
              For over 35 years, Seattle designers and architects have chosen Terris Draheim Outdoor as the go-to source for their clients. We offer an exquisite array of exterior furniture collections custom tailored for refined interior designers and homeowners.
            </p>
          </div>

          {/* Column 2: Information */}
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Information</h3>
            <ul class="space-y-2">
              <li><Link href="/care" class="hover:text-white">Care & Maintenance</Link></li>
              <li><Link href="/warranties" class="hover:text-white">Warranties</Link></li>
              <li><Link href="/about" class="hover:text-white">About Us</Link></li>
              <li><Link href="/delivery" class="hover:text-white">Delivery Information</Link></li>
              <li><Link href="/privacy" class="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" class="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3: My Account */}
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">My Account</h3>
            <ul class="space-y-2">
              <li><Link href="contact" class="hover:text-white">Contact Us</Link></li>
              <li><Link href="returns#" class="hover:text-white">Returns</Link></li>
              <li><Link href="account" class="hover:text-white">My Account</Link></li>
              <li><Link href="order-history" class="hover:text-white">Order History</Link></li>
              <li><Link href="wish-list" class="hover:text-white">Wish List</Link></li>
              <li><Link href="#newsletter" class="hover:text-white">Newsletter</Link></li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Reach us at</h3>
            <ul class="space-y-2">
              <li>
                <Link href="tel:+12067634100" class="hover:text-white">
                  Phone: (206) 763-4100
                </Link>
              </li>
              <li>
                <Link href="mailto:outdoor@terrisdraheim.com" class="hover:text-white">
                  Email: outdoor@terrisdraheim.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps?q=5616+Sixth+Avenue+South,+Seattle,+WA+98108"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white"
                >
                  Address: 5616 Sixth Avenue South, Seattle, WA 98108, U.S.A.
                </Link>
              </li>
              <li>Hours: Mon-Fri 9am-5pm</li>
            </ul>
            <h3 class="text-lg font-bold mt-6 text-white">Follow Us</h3>

            <div class="flex space-x-4 justify-end p-2.5">
              <Link href="https://www.instagram.com/terrisdraheim/" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <svg class="w-6 h-6 fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.563.334-3.637 1.408-1.074 1.074-1.35 2.356-1.408 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.35 3.637 1.408 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.563-.334 3.637-1.408 1.074-1.074 1.35-2.356 1.408-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.35-3.637-1.408-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
              </svg>
              </Link>
              <Link href="https://www.facebook.com/terrisdraheimoutdoor/" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <svg class="w-6 h-6 fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
              </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div class="mt-12 border-t border-gray-700 pt-8">
          <p class="text-center text-xs text-gray-400">&copy; 2024 Terris Draheim Outdoor. All rights reserved.</p>
          <p class="text-center text-sm text-gray-400 mb-4">
            Made with <span class="text-red-500">&hearts;</span> by <Link href="https://summus.agency" class="hover:text-white">summus.agency</Link>
          </p>
          
        </div>
      </div>
    </footer>
  );
});
