const mongoose = require("mongoose");

// Pre-remove hook demo
async function runRemoveHookDemo() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/hooks");

    const courseSchema = new mongoose.Schema({
      title: String,
      tag: String
    });

    // Pre-delete hook (document middleware)
    courseSchema.pre(
      "deleteOne",
      { document: true, query: false },
      function () {
        console.log("Pre-delete hook:", this.title);
      }
    );

    const Course =
      mongoose.models.HookCourse ||
      mongoose.model("HookCourse", courseSchema);

    // Create document
    const course = new Course({
      title: "Database Design Basics",
      tag: "remove-hook-demo"
    });

    await course.save();
    console.log("Document saved successfully");

    // Delete document (this triggers pre hook)
    await Course.deleteOne();
    console.log("Document deleted successfully");

    await mongoose.connection.close();
    console.log("Connection closed");
  } catch (error) {
    console.log("Remove hook error:", error.message);
  }
}

runRemoveHookDemo();