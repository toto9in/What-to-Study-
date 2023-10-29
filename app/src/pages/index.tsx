import { useState } from "react";

import { Roboto_Mono } from "next/font/google";
import Head from "next/head";
import styled from "../styles/Home.module.css";
import { InputSearch, Button } from "@/components";

import { search } from "@/services/apiClient";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await search(searchValue)
      .catch((err) => {
        console.error("[ERROR WHILE SEARCH] ", err);
      })
      .finally(() => setLoading(false));

    console.log(data["Pontos chaves"]);
  };

  return (
    <main
      className={`${roboto.className} ${styled.container} flex justify-center items-center`}
    >
      <Head>
        <title>What to Study</title>
      </Head>
      <div className="w-1/3 flex flex-col gap-4">
        <label htmlFor="search" className="ml-4 text-lg font-bold">
          Informe uma matéria:
        </label>
        <div className="w-full h-full">
          <InputSearch onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="mx-auto">
          <Button loading={loading} onClick={handleSearch}>
            Gerar
          </Button>
        </div>
      </div>
    </main>
  );
}
