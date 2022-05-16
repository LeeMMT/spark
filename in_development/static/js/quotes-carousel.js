new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  dragThreshold: false,
  breakpoints: {
    1100: {
      perView: 2,
    },
    800: {
      perView: 1,
    },
  },
}).mount();
