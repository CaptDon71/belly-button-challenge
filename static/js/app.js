// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;
    // Filter the metadata for the object with the desired sample number
    let filteredMetadata = data.metadata.filter(meta => meta.id.toString() === sample)[0];
    // Use `.html("") to clear any existing metadata
    console.log("Dataset:", filteredMetadata);

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    // Select the metadata panel and clear existing content
    let metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html("");

    // Loop through each key-value pair and append to the panel
    Object.entries(filteredMetadata).forEach(([key, value]) => {
      metadataPanel.append("p").text(`${key.toUpperCase()}: ${value}`);
    });
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
    // Don't forget to slice and reverse the input data appropriately
    let sampleValues = filteredSample[0].sample_values;
    let otuIds = filteredSample[0].otu_ids;
    let otuLabels = filteredSample[0].otu_labels;

    // Build a Bubble Chart
      // Create the trace for the bubble chart
      const trace1 = {
        x: otuIds,
        y: sampleValues,
        text: otuLabels,
        mode: "markers",
        marker: {
          size: sampleValues,
          color: otuIds,
          colorscale: "Earth" // Optional: Choose a colorscale
        }
      };

      const layout1 = {
        title: `Bacteria Cultures Per Sample`,
        xaxis: { title: "OTU ID" },
        yaxis: { title: "Number of Bacteria" },
        showlegend: false
      };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", [trace1], layout1);


    // Build a Bar Chart
    // Chart uses Top 10 sample values as values 
    let sampleValues2 = filteredSample[0].sample_values.slice(0, 10).reverse();
    let otuIds2 = filteredSample[0].otu_ids.slice(0, 10).reverse().map(id => `OTU ${id} `);
    let otuLabels2 = filteredSample[0].otu_labels.slice(0, 10).reverse();
    // Create the trace for the bar chart
    let trace2 = {
       x: sampleValues2,
       y: otuIds2,
       text: otuLabels2,
       type: "bar",
       orientation: "h"
    };

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let layout2 = {
      title: `Top 10 Bacteria Cultures Found`,
      xaxis: { title: "Number of Bacteria" },
      yaxis: { otuIds2 }
    };
    // Render the Bar Chart
    Plotly.newPlot("bar", [trace2], layout2);
  });
}

// Function to run on page load
function init() {
  // Create a new <style> element
  var style = document.createElement("style");
  // Set the CSS rules for .card-header
  style.innerHTML = ".card-header {background-color: #347ab6; color: white;}";
  // Append the <style> element to the <head> of the document
  document.head.appendChild(style);
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
    buildMetadata(sample);
  });
}

// Function for event listener
function optionChanged(newSample) {
// Build charts and metadata panel each time a new sample is selected
buildCharts(newSample);
buildMetadata(newSample);
}

// Initialize the dashboard
init();
