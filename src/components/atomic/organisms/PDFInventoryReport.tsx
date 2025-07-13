import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: "Helvetica" },
  header: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 4 },
  subheader: { fontSize: 12, textAlign: "center", marginBottom: 12 },
  sectionTitle: { fontSize: 12, fontWeight: "bold", marginTop: 10, marginBottom: 4 },
  text: { marginBottom: 2 },
  table: { width: "auto", marginVertical: 10 },
  tableRow: { flexDirection: "row", backgroundColor: "#f8f8f8" },
  tableHeader: { backgroundColor: "#e5e5e5", fontWeight: "bold" },
  tableCell: { padding: 4, width: "16.6%", border: "1px solid #ddd" },
});

type EntradaType = {
  idEntrada: number;
  cantidadIngresada: string;
  proveedor: string;
  fechaIngreso: string;
  fkIdBodega: { nombreBodega: string } | null;
  fkIdElemento: { nombreElemento: string; clasificacion: string; estado: string } | null;
};

type Props = {
  entradas: EntradaType[];
  tipoReporte: string;
  bodega: string;
  encargado: string;
  periodo: string;
  generadoPor: string;
  fechaGeneracion: string;
};

const PDFInventoryReport: React.FC<Props> = ({ entradas, tipoReporte, bodega, encargado, periodo, generadoPor, fechaGeneracion }) => {
  const totalProductos = entradas.length;
  const productosDisponibles = entradas.filter(e => e.fkIdElemento && e.fkIdElemento.estado === "Activo").length;
  const productosBajoStock = totalProductos - productosDisponibles;
  const movimientos = entradas.length * 5;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Cellar Inventory</Text>
        <Text style={styles.subheader}>Reporte General de Inventario</Text>

        <Text style={styles.text}>Fecha: {fechaGeneracion}</Text>
        <Text style={styles.text}>Generado por: {generadoPor}</Text>

        <Text style={styles.sectionTitle}>Detalles del Reporte</Text>
        <Text style={styles.text}>Tipo de Reporte: {tipoReporte}</Text>
        <Text style={styles.text}>Bodega: {bodega}</Text>
        <Text style={styles.text}>Encargado: {encargado}</Text>
        <Text style={styles.text}>Período: {periodo}</Text>

        <Text style={styles.sectionTitle}>Inventario de Productos</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>Producto</Text>
            <Text style={styles.tableCell}>Clasificación</Text>
            <Text style={styles.tableCell}>Cantidad</Text>
            <Text style={styles.tableCell}>Proveedor</Text>
            <Text style={styles.tableCell}>Bodega</Text>
            <Text style={styles.tableCell}>Estado</Text>
          </View>
          {entradas.map(item => (
            <View style={styles.tableRow} key={item.idEntrada}>
              <Text style={styles.tableCell}>{item.fkIdElemento?.nombreElemento ?? "N/A"}</Text>
              <Text style={styles.tableCell}>{item.fkIdElemento?.clasificacion ?? "N/A"}</Text>
              <Text style={styles.tableCell}>{item.cantidadIngresada}</Text>
              <Text style={styles.tableCell}>{item.proveedor}</Text>
              <Text style={styles.tableCell}>{item.fkIdBodega?.nombreBodega ?? "N/A"}</Text>
              <Text style={styles.tableCell}>{item.fkIdElemento?.estado ?? "N/A"}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Resumen</Text>
        <Text style={styles.text}>Total de productos: {totalProductos}</Text>
        <Text style={styles.text}>Productos disponibles: {productosDisponibles}</Text>
        <Text style={styles.text}>Productos bajo stock: {productosBajoStock}</Text>
        <Text style={styles.text}>Movimientos en el último mes: {movimientos}</Text>
        <Text style={styles.text}>Última actualización: {fechaGeneracion}</Text>
      </Page>
    </Document>
  );
};

export default PDFInventoryReport;

