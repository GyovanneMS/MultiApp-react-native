import { useState, useEffect } from "react";

// Variável global para armazenar a localização
let localizacaoGlobal = { lat: "", long: "" };

// Função que retorna a localização global atual
export async function useLocalizacao() {
    const localizacao = localizacaoGlobal;

    console.log(localizacao); // Exibe a localização atual no console
    return localizacao; // Retorna a localização atual
}

// Função para definir a localização globalmente
export async function definirLocalizacaoGlobalmente(lat, long) {
    localizacaoGlobal = { lat, long }; // Atualiza a variável global com novas coordenadas

    console.log(localizacaoGlobal); // Exibe a nova localização global no console
}
