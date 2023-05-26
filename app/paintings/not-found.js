export const paintingNotFoundMetadata = {
  title: 'Painting not found',
  description: "Sorry can't find the page you are looking for..",
};

// a 404 error is an error on the page.
export default function PaintingsNotFound() {
  return (
    <div>
      Sorry this page was not found, make sure you visit a painting's page that
      exists.
    </div>
  );
}
