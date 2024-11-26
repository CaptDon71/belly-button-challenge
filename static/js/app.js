// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    console.log("Dataset:", data);
    let metadata = data.metadata;
    // Filter the metadata for the object with the desired sample number
    let filteredMetadata = metadata.filter(sample => sample.id === desiredSampleNumber);
    console.log("Filtered Metadata:", filteredMetadata)

    // Use d3 to select the panel with id of `#sample-metadata`


    // Use `.html("") to clear any existing metadata


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

  });
}

// function to build both charts
function buildCharts(sampleNum) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    console.log("sample name:", sampleNum);
    let samples = data.samples;
    // Filter the samples for the object with the desired sample number
    let filteredSample = samples.filter(sample => sample.id === sampleNum);

    // Log the filtered object
    console.log("Filtered Sample:", filteredSample[0]);

    // Get the otu_ids, otu_labels, and sample_values

    let otuIds = filteredSample[0].otu_ids;
    let otuLabels = filteredSample[0].otu_labels;
    let sampleValues = filteredSample[0].sample_values;
    console.log(otuIds);
    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    // Extract the names field
    let names = data.names;

    // Log the names field
    console.log("Names Field:", names);

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      dropdown.append("option")
        .text(name)       // Set option text
        .attr("value", name); // Set option value
    });


    // Get the first sample from the list

    let sample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(sample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
