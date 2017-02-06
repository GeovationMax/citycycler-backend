import { initialiseSeneca } from "./helper";

// DO NOT EDIT THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING!!!!!!

// IMPORT MICROSERVICES
import { image, imagePin } from "./plugins/image";
import { user, userPin } from "./plugins/user";

export default function() {
  const services: { [key: string]: any } = {};

  // ADD MICROSERVICES TO EXPORT
  services[imagePin] = image;
  services[userPin] = user;
  initialiseSeneca(services);
}
