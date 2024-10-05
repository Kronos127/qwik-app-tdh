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
          </div>
        </div>

        {/* Footer Bottom */}
        <div class="mt-12 border-t border-gray-700 pt-8">
          <p class="text-xs text-gray-400">&copy; 2024 Terris Draheim Outdoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});
