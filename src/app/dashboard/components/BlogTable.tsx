import { Button } from "@/components/ui/button";
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { readBlog } from "@/lib/actions/blog";

export default async function BlogTable() {
  const { data: blogs } = await readBlog();
  return (
    <div className="overflow-x-auto">
      <div className="border bg-gradient-dark rounded-md w-[900px] md:w-full">
        <div className="grid grid-cols-5 p-5 text-gray-500 border-b">
          <h1 className="col-span-2">Title</h1>
          <h1>Premium</h1>
          <h1>Publish</h1>
        </div>
        {blogs?.map((blog, index) => {
          return (
            <div className="grid grid-cols-5 p-5" key={index}>
              <h1 className="col-span-2">{blog.title}</h1>
              <Switch checked={blog.is_premium} />
              <Switch checked={blog.is_published} />
              <Actions />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Actions = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button variant="outline" className="flex items-center gap-2">
        <EyeOpenIcon />
        View
      </Button>
      <Button variant="outline" className="flex items-center gap-2">
        <TrashIcon />
        Delete
      </Button>
      <Button variant="outline" className="flex items-center gap-2">
        <Pencil1Icon />
        Edit
      </Button>
    </div>
  );
};
