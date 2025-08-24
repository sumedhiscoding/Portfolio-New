"use client";

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDocument } from "./ResumeDoc";

export default function ResumeViewer() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>

      <div className="w-full h-[90vh] border">
        <PDFViewer width="100%" height="100%">
          <ResumeDocument />
        </PDFViewer>
      </div>

      <PDFDownloadLink
        document={<ResumeDocument />}
        fileName="sumedh-resume.pdf"
        className="mt-4 text-blue-600 underline"
      >
        {({ loading }) => (loading ? "Preparing download..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
}
