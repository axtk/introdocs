const marker = {
  show: {
    start: "<!-- introdocs-show-start --",
    end: "-- introdocs-show-end -->",
  },
  hide: {
    start: "<!-- introdocs-hide-start -->",
    end: "<!-- introdocs-hide-end -->",
  },
};

export function preprocessContent(s: string) {
  let k0 = -1;
  let k1 = -1;

  while (
    (k1 = s.lastIndexOf(marker.show.end)) !== -1 &&
    (k0 = s.lastIndexOf(marker.show.start, k1)) !== -1
  )
    s = `${s.slice(0, k0)}${s.slice(k0 + marker.show.start.length, k1)}${s.slice(k1 + marker.show.end.length)}`;

  while (
    (k1 = s.lastIndexOf(marker.hide.end)) !== -1 &&
    (k0 = s.lastIndexOf(marker.hide.start, k1)) !== -1
  )
    s = `${s.slice(0, k0 + marker.hide.start.length - 1)}${s.slice(k0 + marker.hide.start.length, k1)}${s.slice(k1 + 2)}`;

  return s;
}
