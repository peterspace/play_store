import React from 'react'
import FrameComponent16 from "./FrameComponent16";

const RatingTablet = () => {
  return (
    <>
    <div className="self-stretch flex flex-col items-start justify-start text-5xl">
     <div className="flex flex-row items-center justify-start">
       <div className="flex flex-row items-start justify-start">
         <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block min-w-[82px] mq450:text-lgi mq450:leading-[19px]">
           Ratings
         </h2>
       </div>
     </div>
   </div>
   <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 box-border gap-5 max-w-full text-lg">
     <div className="w-[412px] flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
       <div className="relative leading-[24px] inline-block min-w-[89px]">
         Play stores
       </div>
       <div className="relative leading-[24px] inline-block min-w-[92px]">
         Apple store
       </div>
     </div>
     <div className="w-[608px] flex flex-row items-start justify-start flex-wrap content-start gap-8 max-w-full text-37xl mq625:gap-4">
       <FrameComponent16 ratingNumber="4.6" k="484K" />
       <FrameComponent16
         ratingNumber="4.5"
         propPadding="unset"
         k="280.8K"
         propMinWidth="37px"
         propWidth="129px"
         propWidth1="70px"
         propWidth2="50px"
         propWidth3="50px"
       />
     </div>
     <div className="w-[413.3px] flex flex-row items-start justify-between flex-wrap content-start max-w-full gap-5">
       <img
         className="self-stretch w-[93.3px] relative rounded-[2.99px] max-h-full overflow-hidden shrink-0 object-cover min-h-[28px]"
         alt=""
         src="/playstore-1@2x.png"
       />
       <img
         className="self-stretch w-[93.3px] relative rounded-[2.99px] max-h-full overflow-hidden shrink-0 object-cover min-h-[28px]"
         alt=""
         src="/appstore@2x.png"
       />
     </div>
   </div>
   </>
  )
}

export default RatingTablet