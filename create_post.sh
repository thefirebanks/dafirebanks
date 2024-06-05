# Take in the post name as a command line argument 
POST_NAME="what-is-courage"
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