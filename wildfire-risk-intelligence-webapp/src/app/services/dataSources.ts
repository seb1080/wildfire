export interface DataSource {
  url: string;
  description: string;
  dataSet: string;
}

const fireDistributedArea: DataSource = {
  url: `https://geohub.lio.gov.on.ca/datasets/lio::fire-disturbance-area/about`,
  description: `https://www.publicdocs.mnr.gov.on.ca/mirb/Fire%20Disturbance%20Area%20-%20Data%20Description.pdf`,
  dataSet: `https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open09/MapServer/28/query?outFields=*&where=1%3D1&f=geojson`,
};
const facilityPoint: DataSource = {
  url: `https://geohub.lio.gov.on.ca/documents/lio::fire-potential-hazardous-forest-types-for-wildland-fire/about`,
  description: `https://www.publicdocs.mnr.gov.on.ca/mirb/Fire,%20Aviation%20and%20Emergency%20Facility%20Point%20-%20Data%20Description.pdf`,
  dataSet: `https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open05/MapServer/21/query?outFields=*&where=1%3D1&f=geojson`,
};

export const dataSources = {
  fireDistributedArea,
  facilityPoint,
};
