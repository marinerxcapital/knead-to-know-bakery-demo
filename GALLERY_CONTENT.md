# Gallery content guide

The Gallery page is ready for approved bakery photography, standard video, and 360-video embeds.

## Add photos or self-hosted video

1. Place files in `public/assets/gallery/`.
2. Open `data/galleryItems.ts`.
3. Add a `src` field to a gallery item, for example:

```ts
src: "/assets/gallery/classic-country-loaf.jpg"
```

Use `.jpg`, `.webp`, or `.png` for photos, and compressed `.mp4` for video. Keep images under 2 MB and short video clips under 20 MB where practical.

## Add an immersive 360 video

For the smoothest client experience, upload the 360 video to YouTube, confirm it plays as a 360 video there, then add its YouTube embed URL to an item:

```ts
embedUrl: "https://www.youtube.com/embed/VIDEO_ID"
```

The embedded YouTube player provides the interactive 360 controls. A local `.mp4` can also be supplied through `src`, but will use standard video playback in this static demo.

## Publish updates

After replacing gallery files or editing the data file, rebuild and publish the static site. The gallery uses placeholders until a corresponding `src` or `embedUrl` has been supplied.
