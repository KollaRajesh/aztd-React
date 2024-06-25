## `<head>`: 
     Non-visible stuff (or)meta data , css or scripts reference goes in the `<head>` tag

<head>
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>

In this example, the `<head>` tag is used to include meta data, CSS stylesheets, and JavaScript files in the HTML document. 
The `<title>` tag sets the title of the webpage,
the `<link>` tag references an external CSS file
the `<script>` tag references an scripts file



## `<!DOCTYPE>`:

The <!DOCTYPE> declaration is used to specify the type of HTML document being used. It is not an HTML tag, but rather an instruction to the browser about how to interpret the document.

Here is an example of a <!DOCTYPE> declaration for an HTML5 document:

```html
<!DOCTYPE html> 
```
This declaration tells the browser that the document is an HTML5 document. It is typically placed at the very beginning of an HTML file, before the <html> tag.

## &lt;h1&gt;: 
   Defines different levels of headings.
   Higher heding number mean the content that appears between the headings is less important than lower numbers.
  
Example for h1, h2, h3 tags:

```html
<h1>This is a level 1 heading</h1>  <!--more important --> <!--H1 is used for Page title /Company name -- >
<h2>This is a level 2 heading</h2>  <!--h2 is used for main subject -- >
<h3>This is a level 3 heading</h3> <!--less important --> <!--h3 through  h6 are used to organize other divisions of page content-->
```

## &lt;a&gt;: 
   Defines a hyperlink. 
 
  href: The most important attribute. It specifies the URL (web address) the link
    
    if no protocal/server is included , the browser assumes the protocal and server are the same as the page you are requesting 

  target: Specifies where the link should open. Common values include:
    _blank: Opens the link in a new tab or window.
    _self: Opens the link in the same tab or window (default behavior).
    _parent: Opens the link in the parent frame (iframes).
    _top: Opens the link in the full body of the window (removing any frames).
  
Example for `<a>` tag:

```html
<a href="https://www.example.com">This is a link</a>
```

This creates a hyperlink with the text "This is a link" that redirects to the URL "https://www.example.com".

## &lt;p&gt;: Represents a paragraph of text.

 Add paragraph content (where necessary) in between heading tags.
  
Example 1 for `<p>` tag:

```html
<p>This is a paragraph of text.</p>
```
This creates a paragraph of text that will be displayed in the browser.

Example 2 for `<p>` tag:

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris nec nisl aliquet fringilla. Nulla facilisi. Donec id felis id velit lacinia lacinia. Sed auctor, nunc id tincidunt tincidunt, nisl nunc tincidunt nunc, id tincidunt nunc nunc id nunc.</p>
```

This creates a longer paragraph of text using the placeholder text "Lorem ipsum dolor sit amet, consectetur adipiscing elit." This is commonly used as a placeholder in design and typesetting.

## &lt;img&gt;: Embeds an image.

Here are two examples for the `<img>` tag:

Example 1:
```html
<img src="image.jpg" alt="Description of the image">
```
This code embeds an image called "image.jpg" and provides a description for the image.

Example 2:
```html
<img src="https://www.example.com/image.png" alt="Another image">
```
This code embeds an image from a URL "https://www.example.com/image.png" and provides a description for the image.



## &lt;ul&gt; and &lt;ol&gt;: 
    Create unordered and ordered lists, respectively.
    Here are two examples for the `<ul>` tag:

    Example 1:
    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    ```
    This code creates an unordered list with three items: "Item 1", "Item 2", and "Item 3".

    Example 2:
    ```html
    <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
    </ul>
    ```

This code creates an unordered list with three items: "Apple", "Orange", and "Banana".

Here are two examples for the `<ol>` tag:

Example 1:

This code creates an ordered list with three items: "Item 1", "Item 2", and "Item 3".

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```
Here are two examples for the &lt;ol&gt; are 

Example 2:
```html 
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```
This code creates an ordered list with three items representing steps: "First step", "Second step", and "Third step".


### &lt;div&gt;:
     Defines a section in a document.
    ## &lt;div&gt;:
        Defines a section in a document.
        
    Example 1:
    ```html
    <div>
        <h1>This is a heading inside a div</h1>
        <p>This is a paragraph inside a div.</p>
    </div>
    ```
    This code creates a section in the document using the `<div>` tag. It contains a heading and a paragraph.

    Example 2:
    ```html
    <div>
        <img src="image.jpg" alt="An image inside a div">
        <p>This is a paragraph with an image inside a div.</p>
    </div>
    ```
    This code creates a section in the document using the `<div>` tag. It contains an image and a paragraph.

     
###  &lt;span&gt;: 
     Inline container for styling or scripting.

      
    Here are two examples for the `<span>` tag:

    Example 1:
    ```html
    <span style="color: red;">This text is styled with red color.</span>
    ```
    This code wraps the text "This text is styled with red color." in a `<span>` tag and applies a CSS style to make the text appear in red color.

    Example 2:
    ```html
    <span class="highlight">This text is highlighted.</span>
    ```
    This code wraps the text "This text is highlighted." in a `<span>` tag and applies a CSS class called "highlight" to style the text with a specific highlight effect.

###  &lt;table&gt;: 
     Creates a table.

      
    Here are two examples for the `<table>` tag:

    Example 1: Simple table
    ```html
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
      </tr>
    </table>
    ```
    This code creates a simple table with three columns and two rows. The first row is the header row, and the following rows contain data.

  Example 2: Complex table

 ```html
    <table>
      <thead>
        <tr>
          <th rowspan="2">Header 1</th>
          <th colspan="2">Header 2</th>
        </tr>
        <tr>
          <th>Subheader 1</th>
          <th>Subheader 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
      </tbody>
    </table>
```
    This code creates a complex table with merged cells and multiple header rows. The first column has a rowspan of 2, which means it spans across two rows. The second header column has a colspan of 2, which means it spans across two columns. The table also has a separate tbody section for the data rows.

###  `<fieldset>`:

The `<fieldset>` tag is used to group related elements in a form.

It draws a box around the related elements. You can use it to organize form controls together.


####  `<legend>`:

The `<legend>` tag defines a caption for the `<fieldset>` element.
It helps describe the purpose of the grouped controls.



For example:

```html
<form action="/action_page.php">
    <fieldset>
        <legend>Personalia:</legend>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <!-- Other form controls go here -->
    </fieldset>
</form>

```
For example, in the code snippet above, “Personalia” serves as the legend for the related form fields.



###  `<label>` :

The `<label>` tag associates a label with a form control (such as an input field).
It improves accessibility and usability. For instance:


```html
<label for="email">Email:</label>
<input type="email" id="email" name="email"><br><br>

```

###  `<input>` :
The `<input>` tag creates various form controls, such as text fields, checkboxes, radio buttons, and more.
You can customize its type attribute to suit your needs. For example:

```html
<input type="text" id="fname" name="fname">
<input type="email" id="email" name="email">

```

### &lt;form&gt;: 
Defines an HTML form for user input.
    
Here are two examples of <form> tags:

Example 1: Simple form

```html
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name">
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email">
        <br>
        <input type="submit" value="Submit">
    </form>
```

This code creates a simple form with two input fields for name and email. It also includes a submit button.

Example 2: Complex form
```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name">
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email">
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password">
  </fieldset>
  <br>
  <fieldset>
    <legend>Additional Information</legend>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" placeholder="Enter your age">
    <br>
    <label for="gender">Gender:</label>
    <select id="gender" name="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </fieldset>
  <br>
  <input type="submit" value="Submit">
</form>
```
This code creates a more complex form with multiple fieldsets. The first fieldset contains personal information fields like name, email, and password. The second fieldset contains additional information fields like age and gender. The form also includes a submit button.

