import { useState, useEffect } from "react";

let localizacaoGlobal = { lat: "", long: "" };

export async function useLocalizacao() {
    const localizacao = localizacaoGlobal;

    console.log(localizacao);
    return localizacao
}
export async function definirLocalizacaoGlobalmente(lat, long) {
    localizacaoGlobal = { lat, long };
    console.log(localizacaoGlobal);
}
