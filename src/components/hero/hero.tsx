import { component$ } from '@builder.io/qwik';
import { ImageGallery } from './imageGalery';

export const Hero = component$(() => {
  return <>
  <ImageGallery client:visible />
  </>
});