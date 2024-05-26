# Remote Kitchen
- clone this project
- open command line for this project and then `npm install`
- start the json server `npm run json-server`
- start development server `npm run dev`
- `You are done!!! Now you can see the project.`
----
----
### `1. A project titled, “Alex’s Kitchen” from team "Remote Kitchen" uses Git for version control. Several developers are contributing, with each working on their own branch. The team follows certain conventions. Suppose you need to submit a hotfix. How would you name your branch? After finalizing your work in your designated branch, detail the steps you would take to create a PR and merge it with the production branch.`

-----
-----

For a hotfix, the branch name `hotfix_login_button` is chosen. This naming convention is convenient because `hotfix` indicates it's a bug-fixing branch and `login_button` describes the specific issue being fixed.

### 1. Create a new branch

```
git checkout -b hotfix_login_button
```

### 2. Fix, Commit and Push commits

Fix the login button and commit fixes.

```
git commit -m "hotfix_login_button fixed"
git push origin hotfix_login_button
```

### 3. Create a Pull Request (PR)

Go to the repository on GitHub and create a pull request, base branch should be 'main'. Submit your pull request and wait for review.

### 4. Merge the PR

When the PR is approved, it can be merged. If you have permission to merge now you can merge the pull request.

### 5. Delete the Branch

You should delete the branch hotfix_login_button for cleaner.

### 6. Update local main branch

Update the local main branch

```
git checkout main
git pull origin main
```

### `2. In a Digital Kitchen, we have an array of Menu collections. Each collection is an object of Menu. And contains two properties alongside with various properties of Menu. Which are, menuItems (which is an array of objects. Each object has a unique identifier) and, categories. Categories itself is an array of objects. In each object inside categories, there is one property (an array of int’s) called, menuItemsIds. Find out the specific items that belongs to each category. Take a reference from below code snippet,`

```
const dummyArr = [
    {
      type: "Vegetarian",
      menuItems: [
        {id: 1, name: "Salad"},
        {id: 2, name: "Veg Burger"},
        {id: 3, name: "Pasta"}
      ],
      category: [{
        name: "Starters",
        menuItems:[1,2]
      }]
    },
    {
      type: "Non-Vegetarian",
      menuItems: [
        {id: 4, name: "Chicken Wings"},
        {id: 5, name: "Beef Burger"},
        {id: 6, name: "Shrimp Pasta"}
      ],
      category: [{
        name: "Main Course",
        menuItems:[4,5]
      }]
    }
]

```

### `Discuss the conceptual approach. Explain, how you will resolve this or get the data based on the conditions where id’s are being matched, keeping aside the specifics of coding.`

---

---

### First of all I would like to show the code first and then explain conceptual approach.

`I have extended the category into multiple arrays of objects in dummyArr`
```
const dummyArr = [
  {
    type: "Vegetarian",
    menuItems: [
      { id: 1, name: "Salad" },
      { id: 2, name: "Veg Burger" },
      { id: 3, name: "Pasta" },
      { id: 7, name: "Grilled Veggies" }
    ],
    category: [
      {
        name: "Starters",
        menuItems: [1, 2]
      },
      {
        name: "Main Course",
        menuItems: [3, 7]
      }
    ]
  },
  {
    type: "Non-Vegetarian",
    menuItems: [
      { id: 4, name: "Chicken Wings" },
      { id: 5, name: "Beef Burger" },
      { id: 6, name: "Shrimp Pasta" },
      { id: 8, name: "Steak" }
    ],
    category: [
      {
        name: "Main Course",
        menuItems: [4, 5]
      },
      {
        name: "Grill",
        menuItems: [6, 8]
      }
    ]
  }
];

function findItemsInCategories(menuCollections) {
  const result = [];
  menuCollections.forEach(item => {
    const category = [];
    item.category.forEach((e)=>{
      const categoryMaped = e.menuItems.map(id=>item.menuItems.find(cat=>cat.id===id))
      category.push({
        type: item.type,
        category: e.name,
        items:categoryMaped
      })
    })
    result.push(...category);
  })
  return result;
}

const categorizedItems = findItemsInCategories(dummyArr);
console.log(JSON.stringify(categorizedItems, null, 2));
```

`Result will be...`
----
```
[
  {
    "type": "Vegetarian",
    "category": "Starters",
    "items": [
      {
        "id": 1,
        "name": "Salad"
      },
      {
        "id": 2,
        "name": "Veg Burger"
      }
    ]
  },
  {
    "type": "Vegetarian",
    "category": "Main Course",
    "items": [
      {
        "id": 3,
        "name": "Pasta"
      },
      {
        "id": 7,
        "name": "Grilled Veggies"
      }
    ]
  },
  {
    "type": "Non-Vegetarian",
    "category": "Main Course",
    "items": [
      {
        "id": 4,
        "name": "Chicken Wings"
      },
      {
        "id": 5,
        "name": "Beef Burger"
      }
    ]
  },
  {
    "type": "Non-Vegetarian",
    "category": "Grill",
    "items": [
      {
        "id": 6,
        "name": "Shrimp Pasta"
      },
      {
        "id": 8,
        "name": "Steak"
      }
    ]
  }
]
```


## `Conceptual approach`
- Since I have to sort by category, category can be multiple again so I have to think about the category and move on.
- There are many ways to filter by a category, but if I loop inside a for loop I get the categories and find the menuitem with that id to do the job.