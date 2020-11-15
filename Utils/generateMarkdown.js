// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n



   # Description
   ${data.description}\n
   ![Code](code.png)

   ## Table of Contents
   1. Installation
   2. Usage
   3. Contributors
   4. Test
   5. License
   6. Contact
  

   # Installation\n
   ${data.installation}\n

   # App Usage\n
   ${data.usage}\n

   # Contributors\n
   ${data.contribution}\n

   # License\n
   ${data.license}\n

   # Contact\n
   Github:${data.github}\n
   Email: ${data.email}\n
`;
}

module.exports = 
  generateMarkdown
;
