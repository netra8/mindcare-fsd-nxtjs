import logo from "@/assets/logo.png";
import { getCart } from "@/lib/db/cart";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";


async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}



export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1" style={{ marginLeft: "20px" }}>
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} height={140} width={140} alt="Mindcare logo" />
          </Link>
          
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts} className="relative">
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input-bordered input w-full min-w-[100px] pr-8"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 transform"
              >
                🔍 {/* Search emoji */}
              </button>
            </div>
          </form>
        </div>
        <Link href="/all-products" className="btn-ghost btn">
          Products
        </Link>
        <ShoppingCartButton cart={cart} />
        <UserMenuButton session={session} />
      </div>
    </div>
  );
}
