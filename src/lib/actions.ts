"use server";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const createPost = async (formData: FormData) => {
  const user = await currentUser();
  const desc = formData.get("desc") as string;

  if (!user) {
    return redirect("/guest-book");
  }

  if (!desc) {
    return redirect("/guest-book");
  }

  try {
    // Create or update user in our database with only the fields we have in our schema
    const dbUser = await prisma.user.upsert({
      where: { id: user.id },
      create: {
        id: user.id,
        name: user.username || user.firstName || "Anonymous",
        image: user.imageUrl || null,
      },
      update: {
        name: user.username || user.firstName || "Anonymous",
        image: user.imageUrl || null,
      },
    });

    // Create the guest book entry
    await prisma.guestBookEntry.create({
      data: {
        message: desc,
        userId: dbUser.id,
      },
    });

    revalidatePath("/guest-book");
    revalidateTag("guestBookEntries");
  } catch (error) {
    throw error;
  }
};
