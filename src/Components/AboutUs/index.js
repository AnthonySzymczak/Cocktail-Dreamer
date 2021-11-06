import React from "react";

function AboutUs() {
  return (
    <div>
      <h1 class="text-center text-3xl">About the Creators</h1>
      <div>
        <div>
          <div class=" py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <h3 class="text-center"> Anthony Szymczak</h3>
                {/* <div class="text-center">
                  Place Holder For Image
                </div> */}

                  <p>
                    Born in 1993 in Worcester, Massachusetts, to two Polish Immigrant parents. His passion for working with computers started when we was eleven years old; World of warcraft was released.
                    A bartender for the last ten years, he hopes to truly achieve excellence in the developer field, rather than being behind the bar.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div>
        <div class=" py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h3 class="text-center"> Isaac Harris</h3>
          {/* <div>
            image of yourself
          </div>
          <p>
            Talk about your passions, where you come from, brief history of you
            the creator
          </p> */}
          </div>
          </div>
          </div>
        </div>

        <div>
        <div class=" py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h3 class="text-center"> Victor Mervens</h3>
          {/* <div>
            image of yourself
          </div> */}
          <p>
            Twenty four years of age and born in Port-Au-Prince, Haiti - Mervens Victor came to the United States for the best opportunities in the future.
            Result driven individual, strives for the highest quality work in all aspects of a project. Diverse skillset, experience with computer software & OS.
            Enjoys reading, writing, creating videos and art for hobbies, along with a love for hotdogs and ribs.
          </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;