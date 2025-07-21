/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */
import { createIcons, icons } from "/assets/vendor/lucide/lucide.js";

document.addEventListener("DOMContentLoaded", function () {
  var tabledata = [
    { id: 1, nama: "Budi Santoso", umur: 30, kota: "Jakarta", status: true },
    { id: 2, nama: "Siti Aminah", umur: 24, kota: "Bandung", status: false },
    { id: 3, nama: "Joko Susilo", umur: 35, kota: "Surabaya", status: true },
    { id: 4, nama: "Dewi Lestari", umur: 28, kota: "Yogyakarta", status: true },
    { id: 5, nama: "Rina Wijaya", umur: 42, kota: "Medan", status: false },
    { id: 6, nama: "Hadi Cahyono", umur: 29, kota: "Semarang", status: true },
    {
      id: 7,
      nama: "Nurul Hidayah",
      umur: 31,
      kota: "Palembang",
      status: false,
    },
    { id: 8, nama: "Agus Salim", umur: 26, kota: "Makassar", status: true },
    { id: 9, nama: "Fitriani", umur: 33, kota: "Denpasar", status: true },
    {
      id: 10,
      nama: "Rio Pratama",
      umur: 27,
      kota: "Balikpapan",
      status: false,
    },
  ];
  var table = new Tabulator("#my-data-table", {
    height: "311px",
    data: tabledata,
    layout: "fitColumns",
    columns: [
      { title: "ID", field: "id", width: 60 },
      { title: "Nama Lengkap", field: "nama", minWidth: 150, editor: "input" },
      {
        title: "Umur",
        field: "umur",
        width: 80,
        hozAlign: "center",
        sorter: "number",
      },
      { title: "Kota", field: "kota", minWidth: 100, editor: "input" },
      {
        title: "Status",
        field: "status",
        width: 120,
        hozAlign: "center",
        formatter: "tickCross",
        sorter: "boolean",
        formatterParams: {
          allowEmpty: true,
          allowTruthy: true,
          allowFalsy: true,
          tickElement:
            "<i data-lucide='check-circle' class='text-green-500 w-5 h-5'></i>",
          crossElement:
            "<i data-lucide='x-circle' class='text-red-500 w-5 h-5'></i>",
        },
      },
    ],
  });
  createIcons({ icons });
});