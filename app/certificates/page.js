import React from "react";
import Certificates from "@/components/Contents/Certificates";
import getData from "@/components/helpers/get-data";

async function CertificatesPage() {
  const certificates = await getData("en", "certificates");
  return (
    <div className=" pt-10">
      <Certificates certificates={certificates} />
    </div>
  );
}

export default CertificatesPage;
