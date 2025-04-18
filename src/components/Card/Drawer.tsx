"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  const [formData, setFormData] = React.useState({
    id: "",
    title: "",
    description: "",
    priority: "",
    type: "",
    progress: "",
    comments: "",
    links: "",
    assignees: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
      setImagePreview(imageUrl);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Use Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex w-full min-h-[500px]">
          <div
            className="flex-1 bg-gray-200 dark:bg-gray-900 p-6 flex flex-col justify-center items-center border-r border-gray-300 dark:border-gray-700"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="w-full max-w-md text-center space-y-4">
              <p className="text-xl font-bold dark:text-white">Drag and drop image here</p>
              <div className="border-4 border-dashed border-gray-400 p-4 rounded-lg min-h-[300px] flex items-center justify-center bg-white dark:bg-gray-800">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="max-h-[250px] object-contain" />
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No image uploaded</p>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You can also paste an image URL in the form
              </p>
            </div>
          </div>

         
          <div className="w-full max-w-md overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle>Task Form</DrawerTitle>
              <DrawerDescription>Fill out the details below.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <form className="space-y-4">
                {[
                  "id",
                  "title",
                  "description",
                  "priority",
                  "type",
                  "progress",
                  "comments",
                  "links",
                  "assignees",
                ].map((field) => (
                  <input
                    key={field}
                    type={["progress", "comments", "links"].includes(field) ? "number" : "text"}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 dark:bg-gray-800 dark:text-white"
                  />
                ))}

                <input
                  type="url"
                  name="image"
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={(e) => {
                    handleChange(e);
                    setImagePreview(e.target.value);
                  }}
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 dark:bg-gray-800 dark:text-white"
                />
              </form>
              <DrawerFooter>
                <Button variant="secondary">Submit</Button>
                <DrawerClose asChild>
                  <Button variant="destructive">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerDemo;
