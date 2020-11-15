// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n



   # Description
   ${data.description}\n

   ## Table of Contents
   1. [installation] (#Installation)
   2. [usage] (#App Usage)
   3. [contributors] (#Contributors)
   4. [test] (#Tests)
   5. [license] (#lincense)
   6. [contact] (#contact)
  

   ## Installation\n
   ${response.installation}\n

   ## App Usage\n
   ${response.usage}\n

   ## Contributors\n
   ${response.contribution}\n

   ## Tests\n
   ${response.test}\n

   ## License\n
   ${response.license}\n

   ## Contact\n
   Github:${response.github}\n
   Email: ${response.email}\n

   

   

`;
}

module.exports = {
  generateMarkdown
};
