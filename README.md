**Belly Button Biodiversity Dashboard**

This project creates an interactive dashboard to explore biodiversity data from belly button microbiome samples. The dashboard allows users to explore various microbiome data and metadata from different individuals. It features dynamic visualizations such as bar charts, bubble charts, and metadata displays to provide insights into the composition of the microbiome based on different sample numbers.

**Features:**

Dropdown Menu: Allows users to select a sample from the dataset and view relevant microbiome data.
Horizontal Bar Chart: Displays the top 10 OTUs (Operational Taxonomic Units) found in the selected sample.
Bubble Chart: Visualizes OTU data with sample values as bubble sizes and colors corresponding to OTU IDs.
Metadata Display: Shows demographic information for the selected sample in a dynamic text format

**Files:**
index.html: Houses the visualiztion compnents 
samples.json: Example of data pulled from https://robdunnlab.com/projects/belly-button-biodiversity/
static/js/: Folder structure housing javascript files
app.js: Javascript source content

**How to Use:**
Open index file in any web browser: https://captdon71.github.io/belly-button-challenge/
Select a sample number from the dropdown menu.
View the top 10 OTUs in the horizontal bar chart.
Hover over the chart bubbles for detailed information.
View the selected individual's metadata on the right panel.
