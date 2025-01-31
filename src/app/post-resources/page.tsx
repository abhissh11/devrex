import PostResourceForm from "@/components/PostResourceForm";
export default function PostResourcePage() {
  return (
    <div className="px-6 md:px-20 bg-base py-20 flex justify-center items-center">
      <div className="w-[100%] md:w-[70%]">
        <PostResourceForm />;
      </div>
    </div>
  );
}
