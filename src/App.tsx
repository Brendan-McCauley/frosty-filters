import { Route, Routes } from "react-router";
import { ImageGallery } from "./components/ImageGallery";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { PageTitle } from "./components/PageTitle";

export function App() {
  return (
    <Layout>
      <PageTitle />
      <Routes>
        <Route index element={<ImageGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
