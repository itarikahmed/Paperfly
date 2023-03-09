import React from "react";

const BookDetails = () => {
  return( 

<div className="h-screen max-w-4xl mx-auto mt-12">
<div className="flex gap-8">
<img className="w-60 h-72" src="./img/book1.jpg" alt="" />

<div className="">
  <h2 className="font-bold text-4xl pb-4">Book Name</h2>
  <h3 className="text-[#FF8345] text-xl py-2 font-Bold">Author Name:<span></span></h3>
  <p className="py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tenetur corrupti at eligendi, delectus hic eius atque architecto
     ipsa, esse, accusantium tempora corporis! Amet culpa quibusdam iusto inventore aut neque.</p>
     <p className="font-bold">Language:<span>English</span></p>
  <p className="font-bold"> Book Pages:<span>300 pages</span></p>
  <p className="font-bold"> Peice: $300</p>
  <button className="p-2 bg-[#FF8345] text-white font-semibold rounded my-4">Add to card</button>
</div>

</div>
<div>
 
</div>
</div>);
};

export default BookDetails;
