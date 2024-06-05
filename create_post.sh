# Take in the post name as a command line argument 
POST_NAME="why-is-prompting-hard"
cd src/routes/posts/
mkdir $POST_NAME
cd $POST_NAME
touch +page.mdx
echo "---
title: 
date: 
tags:
  - 
---" > +page.mdx