"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { FaHeart, FaHandHoldingHeart, FaHandSparkles, FaAngleRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full gap-2 grid grid-cols-1 mb-12 px-0">
        <Card className="relative w-full h-[60vh] sm:h-[500px] lg:h-[800px] flex rounded-none justify-center">
          <CardHeader className="z-10 flex-col items-baseline px-4 sm:px-8">
            <h4 className="text-white font-medium text-5xl 2xl:w-[30%] lg:text-5xl max-w-full sm:max-w-[70%] md:max-w-[50%]">
              Un univers bien-être à portée de main
            </h4>
            <p className="text-white/80 mt-4 2xl:w-[30%] text-sm sm:text-base md:text-lg max-w-full sm:text-3xl sm:max-w-[70%] md:max-w-[50%]">
              Bienvenue dans mon institut de beauté, je m&apos;appelle Jade Bosmans, je suis de la région d'Enghien et je suis là pour m&apos;occuper de votre bien-être.
            </p>
            <div className="py-4 sm:py-5 flex lg:flex-col sm:flex-row gap-2">
              <Button className="bg-black text-white dark:bg-white dark:text-black rounded-none hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white">
                Prendre rendez-vous
              </Button>
              <Button className="bg-white text-black dark:bg-black dark:text-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                En savoir plus
              </Button>
            </div>
          </CardHeader>
          <Image removeWrapper alt="Card background" className="absolute rounded-none inset-0 w-full h-full object-cover z-0" src="https://nextui.org/images/card-example-6.jpeg" />
        </Card>
      </div>

      {/* Radiance Section */}
      <div className="w-[90%] lg:w-[70%] xl:h-[100vh] mx-auto gap-4 rounded-none flex flex-col md:flex-row items-center">
        <div className="radiance flex flex-col justify-center mt-6 lg:mt-12 md:w-1/2">
          <h4 className="text-xl sm:text-2xl mb-2 lg:mb-5">Radiance</h4>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-4 lg:mb-6 w-full md:w-[85%]">Transformez votre beauté avec expert Care</h2>
          <p className="text-black/60 dark:text-white/60 mt-3 mb-6 text-lg md:text-xl w-full md:w-[80%]">
            Experience a range of personalized beauty services designed to enhance your natural glow. From skincare to makeup, we cater to your unique needs.
          </p>
          <ul className="mt-6 space-y-6">
            <li className="flex items-center text-lg md:text-xl font-light">
              <FaHeart className="mr-3" /> Revitalizing facials for a fresh, youthful appearance.
            </li>
            <li className="flex items-center text-lg md:text-xl font-light">
              <FaHandHoldingHeart className="mr-3" /> Expert makeup application for any special occasion.
            </li>
            <li className="flex items-center text-lg md:text-xl font-light">
              <FaHandSparkles className="mr-3" /> Nail care services to pamper and beautify your hands.
            </li>
          </ul>
          <div className="mt-8 mb-12 flex items-center">
  <Button className="font-light bg-white text-black dark:bg-black dark:text-white rounded-none hover:bg-black hover:text- dark:hover:text-black dark:hover:bg-white text-lg mr-4 border border-black dark:border-white">
    Rendez-vous
  </Button>
  <Button className="flex items-center bg-transparent text-lg group "> {/* Adjusted margin here */}
    En savoir plus
    <span className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
      <FaAngleRight />
    </span>
  </Button>
</div>

        </div>
        <div className="radiance-image w-full h-[60vh] md:w-1/2 flex justify-center mt-12">
          <Image alt="radiance image" className="h-full w-full object-cover rounded-none" src="https://nextui.org/images/card-example-2.jpeg" />
        </div>
      </div>

      {/* Transformation Gallery Section */}
      <div className="gallery-container w-[90%] lg:w-[80%] mx-auto mt-16 mb-12 lg:mt-24 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8">Transformation Gallery</h2>
        <p className="text-lg sm:text-xl mb-8">Witness the stunning transformations of our clients.</p>
        <div className="gallery h-[180vw] lg:h-[120vw] xl:h-full xl:flex-row xl:items-start  flex items-center justify-around flex-col mb-12 mt-12">
          <Image className="w-full h-[75vw] w-[75vw] lg:h-[55vw] xl:h-[35vw] xl:w-[35vw] lg:w-[55vw]  object-cover rounded-md" src="https://nextui.org/images/card-example-6.jpeg" alt="Gallery Image 1" isBlurred />
          <Image className="w-full h-[75vw] w-[75vw] lg:h-[55vw] lg:w-[55vw] xl:h-[35vw] xl:w-[35vw] object-cover rounded-md" src="https://nextui.org/images/card-example-4.jpeg" alt="Gallery Image 2" isBlurred />
        </div>
        <Button className="bg-transparent border rounded-none border-black dark:border-white text-lg font-light h-[50px] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black mt-12">
          Voir la galerie
        </Button>
      </div>
    </>
  ); 
}
