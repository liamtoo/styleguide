**WORK IN PROGRESS**

# Gulp Modules

This setup parts out gulp into separate files for each task.

Before you can run gulp, you need to run `npm install` to install all of the dependencies.

In the `gulpfile.js` you can comment/uncomment which tasks should be loaded. The strings in the array you see in that file directly relate to loading the `js` file in `gulp/tasks`.

So if your tasks only has `'styles'` in it, thats the only task that will be loaded, `gulp/tasks/styles.js`.

Once you define the tasks you want to use, open up `gulp/paths.js`. Here are all of the paths to all of your assets and build destinations. Go through this part by part and configure the paths to all of your resources.

After your tasks and paths are done, you can open up `gulp/tasks/runner.js` to check your default tasks to run groups of other tasks.

It is currently setup to run `'clean', jshint-gulp', 'scripts', 'bundles', 'styles'` by default. If you only need a few tasks, make sure to edit these accordingly by adding/removing the tasks you want to run.
