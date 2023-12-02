import { Button } from "@/components/ui/button";
import ReviewForm from "./review-form";

const ReviewWriting = () => {
  return (
    <section className="block-detail">
      <h2 className="text-[26px] text-primary font-light mb-5">
        Write a Review
      </h2>
      <form>
        <div className="flex flex-col shadow-md px-5 py-[30px] relative bg-[#fafafa]">
          <ReviewForm />
          <div className="mt-[20px]">
            <Button className="rounded-full font-bold p-0 px-[13px] w-auto h-[48px]">
              <div className="md:block text-xs uppercase">Send review</div>
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ReviewWriting;
