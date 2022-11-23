import React from "react";
import Gallery from "react-photo-gallery";

const Header = () => {
  const BasicRows = () => <Gallery photos={photos} />;
  const photos = [
    {
      src: "https://cdn1.smartprix.com/rx-i7PuFueBt-w1200-h1200/7PuFueBt.jpg",
      width: 8,
      height: 9,
    },
    {
      src: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1657192245628/203773b7c46bbb1ba4e7c355fb048842.jpg",
      width: 8,
      height: 9,
    },
    {
      src: "https://www.cnet.com/a/img/resize/9fb42bb6a5f30ec7c6248f4b9fe153a1147c5cb7/hub/2022/02/22/3cf00e76-32d0-4832-a886-ebc6bc592c87/samsung-galaxy-s22-and-s22-plus-and-s22-ultra-compared-005.jpg?auto=webp&fit=crop&height=1200&width=1200",
      width: 8,
      height: 9,
    },
    {
      src: "https://media.wired.com/photos/5e4ee5f25d422000084f9b56/master/pass/Gear-Buying-Guide-Galaxy-S20-Cosmic-Gray.jpg",
      width: 8,
      height: 9,
    },
    {
      src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-android-smartphones-1602769715.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
      width: 8,
      height: 9,
    },
    {
      src: "https://images.priceoye.pk/realme-9-4g-pakistan-priceoye-9e84o-270x270.webp",
      width: 8,
      height: 9,
    },
    {
      src: "https://assetscdn1.paytm.com/images/catalog/view_item/822913/1631526662287.png",
      width: 8,
      height: 9,
    },
    {
      src: "https://c.ndtvimg.com/2021-07/a361jmco_oneplus-nord-2_120x90_23_July_21.jpg",
      width: 8,
      height: 9,
    },
  ];
  return (
    <div>
      <div className="relative mt-12">
        <BasicRows />
      </div>
      <div className="absolute top-2/4 left-1/3 backdrop-blur-sm">
        <div class="relative backdrop-blur-sm flex  flex-col items-center justify-center overflow-hidden  sm:p-12">
          <div class="  rounded-md border-2 border-gray-100 bg-white p-14">
            <div class="flex flex-col items-center">
              <span class="-rotate-1 rounded-lg bg-yellow-100 py-px px-2 text-sm text-yellow-800">
                117+ people joined this week
              </span>
              <h3 class="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
              Search What Product You want
              </h3>
              <form
                action=""
                class="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
              >
                <input
                  type="text"
                  name="name"
                  id="email"
                  class="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
                  placeholder="Type Iteam"
                />
                <button
                  type="submit"
                  class="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
