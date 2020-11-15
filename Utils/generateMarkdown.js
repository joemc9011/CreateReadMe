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
   ${data.installation}\n

   ## App Usage\n
   ${data.usage}\n

   ## Contributors\n
   ${data.contribution}\n

   ## Tests\n
   ${data.test}\n

   ## License\n
   ${data.license}\n

   ## Contact\n
   Github:${data.github}\n
   Email: ${data.email}\n
`;
}

module.exports = 
  generateMarkdown
;
