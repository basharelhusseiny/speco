export type Orientation = 'landscape' | 'portrait' | 'wide'

export interface GalleryImage {
  /** Path without the -desktop/-mobile suffix */
  path: string
  /** Descriptive alt text: project, location, what is shown */
  alt: string
  /** Short display caption */
  caption: string
  orientation: Orientation
}

const EPS = '/assets/images/eps-products'
const PREFAB = '/assets/images/prefab-products'
const HB = '/assets/images/projects/h-brothers'
const MSF = '/assets/images/projects/msf-tujur'
const PREFAB_PRJ = '/assets/images/projects/prefab-projects'
const SEPTIC = '/assets/images/projects/septic-tank'

export const img = {
  epsEdgeProfile: { path: `${EPS}/eps-panel-edge-profile`, alt: 'Close-up of a SPECO EPS 3D wall panel edge showing the insulated core and galvanised wire mesh', caption: 'Panel edge profile: EPS core with galvanised wire mesh', orientation: 'portrait' as const },
  epsMeshFace: { path: `${EPS}/eps-panel-mesh-face`, alt: 'Welded steel mesh face of a SPECO EPS 3D wall panel at the Juba factory', caption: 'Welded mesh face, ready for plaster', orientation: 'portrait' as const },
  epsStacked: { path: `${EPS}/eps-panels-stacked`, alt: 'Finished EPS 3D wall panels stacked at the SPECO factory in Juba, South Sudan', caption: 'Finished panels stacked at the Juba factory', orientation: 'portrait' as const },
  epsWarehouse: { path: `${EPS}/eps-warehouse-inventory`, alt: 'EPS panel inventory inside the SPECO factory warehouse in Juba', caption: 'Panel inventory at the SPECO factory, Juba', orientation: 'landscape' as const },
  epsStairHandling: { path: `${EPS}/eps-staircase-handling`, alt: 'Workers handling a SPECO EPS staircase element at the factory in Juba', caption: 'EPS staircase element during handling', orientation: 'landscape' as const },
  epsStairDetail: { path: `${EPS}/eps-staircase-detail`, alt: 'Detail of a SPECO EPS staircase element showing mesh reinforcement', caption: 'Staircase element detail', orientation: 'landscape' as const },
  epsInstallWide: { path: `${EPS}/eps-install-site-wide`, alt: 'SPECO EPS panel installation underway on a construction site in Juba', caption: 'Panel installation on site', orientation: 'landscape' as const },
  epsInstallLift: { path: `${EPS}/eps-install-site-lift`, alt: 'SPECO crew lifting an EPS wall panel into position on site in Juba', caption: 'Lifting panels into position', orientation: 'portrait' as const },

  prefabCorner: { path: `${PREFAB}/prefab-panel-corner`, alt: 'Corner joint of SPECO prefabricated sandwich wall panels', caption: 'Sandwich panel corner joint', orientation: 'portrait' as const },
  prefabCornerWide: { path: `${PREFAB}/prefab-panel-corner-wide`, alt: 'Assembled SPECO sandwich wall panels with corner detail at the Juba factory', caption: 'Assembled wall panels, corner detail', orientation: 'landscape' as const },
  prefabCarry: { path: `${PREFAB}/prefab-panel-carry`, alt: 'Two workers carrying a lightweight SPECO sandwich panel', caption: 'Two-man panel carry, no heavy plant required', orientation: 'portrait' as const },
  prefabRoofInsulated: { path: `${PREFAB}/prefab-roof-panels-insulated`, alt: 'Insulated sandwich roof panels manufactured by SPECO in Juba', caption: 'Insulated roof panels', orientation: 'wide' as const },
  prefabRoofProfile: { path: `${PREFAB}/prefab-roof-panel-profile`, alt: 'Profile view of SPECO insulated roof panels', caption: 'Roof panel profile', orientation: 'wide' as const },
  prefabWarehouseWide: { path: `${PREFAB}/prefab-warehouse-wide`, alt: 'Wide view of the SPECO prefab warehouse in Juba with panel stock', caption: 'The SPECO prefab warehouse, Juba', orientation: 'wide' as const },
  prefabWarehouseAisle: { path: `${PREFAB}/prefab-warehouse-aisle`, alt: 'Aisle of ready-to-ship sandwich panels in the SPECO warehouse, Juba', caption: 'Ready-to-ship stock, warehouse aisle', orientation: 'wide' as const },
  prefabWarehouseStacks: { path: `${PREFAB}/prefab-warehouse-stacks`, alt: 'Stacked prefab sandwich panels in the SPECO warehouse, Juba', caption: 'Stacked prefab components', orientation: 'wide' as const },

  septicA: { path: `${SEPTIC}/eps-septic-tank-formwork-a`, alt: 'SPECO EPS panels used as permanent formwork for a below-grade septic tank', caption: 'EPS panels as septic tank formwork', orientation: 'landscape' as const },
  septicB: { path: `${SEPTIC}/eps-septic-tank-formwork-b`, alt: 'Second view of EPS panel formwork for a cast septic tank, South Sudan', caption: 'Septic tank formwork, second pour', orientation: 'landscape' as const },

  prefabUnitsJuba: { path: `${PREFAB_PRJ}/prefab-units-juba`, alt: 'SPECO prefab accommodation units delivered in Juba, South Sudan', caption: 'Prefab accommodation units, Juba', orientation: 'landscape' as const },
  prefabOfficeGutters: { path: `${PREFAB_PRJ}/prefab-office-gutters`, alt: 'SPECO prefab office block in Juba with gutters and downpipes installed', caption: 'Prefab office block with gutters and downpipes', orientation: 'landscape' as const },
  prefabTwoStoreyStairs: { path: `${PREFAB_PRJ}/prefab-two-storey-stairs`, alt: 'Two-storey SPECO prefab building with external stairs, Juba', caption: 'Two-storey prefab with external stairs', orientation: 'landscape' as const },
  prefabTwoStoreySpiral: { path: `${PREFAB_PRJ}/prefab-two-storey-spiral`, alt: 'Two-storey SPECO prefab building with spiral staircase, Juba', caption: 'Two-storey prefab with spiral stair', orientation: 'portrait' as const },

  team: { path: '/assets/images/team/speco-team', alt: 'The full SPECO Building Technology team at a company event in Juba, South Sudan', caption: 'The SPECO team, Juba', orientation: 'landscape' as const },

  /** Client-supplied replacement (Aug 2026) for the H Brothers closing frame on
   *  the EPS case study and Gallery position 11. The original 11-completed stays
   *  for the Home proof strip and the social share image. */
  hbCompletedV2: { path: `${HB}/11-completed-v2`, alt: 'H Brothers G+6 tower, Katoor, Juba: EPS facade panels installed across the structure', caption: 'Exterior progress', orientation: 'landscape' as const },
}

/** H Brothers G+6 tower, Katoor, Juba. Numbered by build stage — preserve order. */
export const hBrothersImages: GalleryImage[] = [
  { path: `${HB}/01-panels-installed`, alt: 'H Brothers G+6 tower, Katoor, Juba: EPS panels installed on the structure', caption: 'Panels installed', orientation: 'landscape' },
  { path: `${HB}/02-rooftop-wall-plaster`, alt: 'H Brothers G+6 tower, Katoor, Juba: rooftop wall plaster over EPS panels', caption: 'Rooftop wall plaster', orientation: 'landscape' },
  { path: `${HB}/03-services-in-wall`, alt: 'H Brothers G+6 tower, Katoor, Juba: electrical and plumbing services inside EPS walls', caption: 'Services in wall', orientation: 'portrait' },
  { path: `${HB}/04-interior-structure`, alt: 'H Brothers G+6 tower, Katoor, Juba: interior structure during fit-out', caption: 'Interior structure', orientation: 'landscape' },
  { path: `${HB}/05-interior-finished`, alt: 'H Brothers G+6 tower, Katoor, Juba: finished interior space', caption: 'Interior finished', orientation: 'landscape' },
  { path: `${HB}/06-ceiling-grid`, alt: 'H Brothers G+6 tower, Katoor, Juba: ceiling grid installation', caption: 'Ceiling grid', orientation: 'landscape' },
  { path: `${HB}/07-facade-panels`, alt: 'H Brothers G+6 tower, Katoor, Juba: facade panels going on', caption: 'Facade panels', orientation: 'landscape' },
  { path: `${HB}/08-tower-golden-hour`, alt: 'H Brothers G+6 tower, Katoor, Juba: the tower at golden hour', caption: 'Golden hour', orientation: 'landscape' },
  { path: `${HB}/09-tower-exterior-a`, alt: 'H Brothers G+6 tower, Katoor, Juba: completed exterior view', caption: 'Exterior', orientation: 'portrait' },
  { path: `${HB}/10-tower-exterior-b`, alt: 'H Brothers G+6 tower, Katoor, Juba: completed exterior, second view', caption: 'Exterior', orientation: 'portrait' },
  { path: `${HB}/11-completed`, alt: 'H Brothers G+6 tower, Katoor, Juba: the completed building', caption: 'Completed', orientation: 'portrait' },
]

/** MSF South Sudan warehouse, Tujur, Nuba Mountains. Sequenced: logistics story. */
export const msfTujurImages: GalleryImage[] = [
  { path: `${MSF}/01-slab-reinforcement`, alt: 'MSF warehouse, Tujur, Nuba Mountains: slab reinforcement before panels arrive', caption: 'Slab reinforcement', orientation: 'portrait' },
  { path: `${MSF}/02-panels-offloaded`, alt: 'MSF warehouse, Tujur: SPECO sandwich panels offloaded on site', caption: 'Panels offloaded', orientation: 'landscape' },
  { path: `${MSF}/04-panels-staged`, alt: 'MSF warehouse, Tujur: panels staged in build order', caption: 'Panels staged', orientation: 'landscape' },
  { path: `${MSF}/05-panel-carry`, alt: 'MSF warehouse, Tujur: crew carrying a sandwich panel', caption: 'Panel carry', orientation: 'landscape' },
  { path: `${MSF}/03-roof-panel-lift`, alt: 'MSF warehouse, Tujur: roof panel lifted into place', caption: 'Roof panel lift', orientation: 'landscape' },
  { path: `${MSF}/06-container-unload`, alt: 'MSF warehouse, Tujur: unloading materials from container at the remote site', caption: 'Container unload', orientation: 'portrait' },
]

export const prefabProjectImages: GalleryImage[] = [
  img.prefabUnitsJuba,
  img.prefabOfficeGutters,
  img.prefabTwoStoreyStairs,
  img.prefabTwoStoreySpiral,
]

export const septicTankImages: GalleryImage[] = [img.septicA, img.septicB]

export const epsProductImages: GalleryImage[] = [
  img.epsWarehouse, img.epsStacked, img.epsMeshFace, img.epsEdgeProfile,
  img.epsStairHandling, img.epsStairDetail, img.epsInstallWide, img.epsInstallLift,
]

export const prefabProductImages: GalleryImage[] = [
  img.prefabRoofInsulated, img.prefabWarehouseWide, img.prefabCorner, img.prefabCarry,
  img.prefabWarehouseAisle, img.prefabCornerWide, img.prefabRoofProfile, img.prefabWarehouseStacks,
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products/eps-panels', label: 'EPS Panels' },
  { to: '/products/prefab-panels', label: 'Prefab Panels' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const contact = {
  phoneDisplay: '+211 921 982 030',
  phoneHref: 'tel:+211921982030',
  whatsapp: 'https://wa.me/211921982030?text=Hello%20SPECO%2C%20I%20would%20like%20a%20quote%20for...',
  email: 'sales@specobt.com',
  address: 'Gombo Soug Block 1, Juba, South Sudan',
  maps: 'https://maps.app.goo.gl/swHPgLqdjfdTYftUA',
  mapsEmbed: 'https://www.google.com/maps?q=Gombo+Soug,+Juba,+South+Sudan&output=embed',
  hours: [
    'Monday to Friday · 8:00 AM — 5:00 PM',
    'Saturday · 9:00 AM — 1:00 PM',
    'Sunday · Closed',
  ],
  facebook: 'https://www.facebook.com/profile.php?id=61581429820186',
  instagram: 'https://www.instagram.com/specobt',
}
