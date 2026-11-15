"use client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

// import { Envelope } from "@gravity-ui/icons";
import { Event } from "@/type/type";
import { Pencil } from "lucide-react";
import { editManageEventData } from "@/lib/action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const EditManage = ({ manageData }: { manageData: Event }) => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookingDataEdit: Event = {
      title: String(formData.get("title")),
      category: String(formData.get("category")),
      description: String(formData.get("description")),
      image: String(formData.get("image")),
      date: String(formData.get("date")),
      time: String(formData.get("time")),
      location: String(formData.get("location")),
      capacity: Number(formData.get("capacity")),
      organizerEmail: String(formData.get("organizerEmail")),
      organizerName: String(formData.get("organizerName")),
    };
    try {
      const bookingdata = await editManageEventData(
        manageData._id,
        bookingDataEdit,
      );
      toast.success("Edit successfull!");
      console.log(bookingdata);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("failed to edit");
    }
  };
  return (
    <Modal>
      <Modal.Trigger>
        {/* <Link
          href={`/show-event/${manageData._id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400 dark:hover:bg-blue-950"
        >
          <Eye size={17} />
          View
        </Link> */}
        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-2 text-sm font-semibold text-amber-600 transition hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-400"
        >
          <Pencil size={17} />
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Pencil className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Edit Your Event</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update your event information below.
              </p>
            </Modal.Header>

            <Modal.Body className="max-h-[65vh] overflow-y-auto p-6">
              <Surface variant="default">
                <form
                  id="edit-event-form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {/* Event Title */}
                  <TextField
                    className="w-full sm:col-span-2"
                    defaultValue={manageData.title}
                  >
                    <Label>Event Title</Label>
                    <Input name="title" required />
                  </TextField>

                  {/* Category */}
                  <TextField
                    className="w-full"
                    defaultValue={manageData.category}
                  >
                    <Label>Category</Label>
                    <Input name="category" required />
                  </TextField>

                  {/* Capacity */}
                  <TextField
                    className="w-full"
                    defaultValue={manageData.capacity}
                  >
                    <Label>Capacity</Label>
                    <Input name="capacity" type="number" min={1} required />
                  </TextField>

                  {/* Date */}
                  <TextField className="w-full" defaultValue={manageData.date}>
                    <Label>Event Date</Label>
                    <Input name="date" type="date" required />
                  </TextField>

                  {/* Time */}
                  <TextField className="w-full" defaultValue={manageData.time}>
                    <Label>Event Time</Label>
                    <Input name="time" type="time" required />
                  </TextField>

                  {/* Location */}
                  <TextField
                    className="w-full sm:col-span-2"
                    defaultValue={manageData.location}
                  >
                    <Label>Location</Label>
                    <Input name="location" required />
                  </TextField>

                  {/* Image */}
                  <TextField
                    className="w-full sm:col-span-2"
                    defaultValue={manageData.image}
                  >
                    <Label>Image URL</Label>
                    <Input name="image" required />
                  </TextField>

                  {/* Description */}
                  <TextField
                    className="w-full sm:col-span-2"
                    defaultValue={manageData.description}
                  >
                    <Label>Description</Label>
                    <TextArea name="description" required />
                  </TextField>
                  {/* Organizer Name */}
                  <TextField
                    className="w-full"
                    defaultValue={manageData.organizerName}
                  >
                    <Label>Organizer Name</Label>
                    <Input name="organizerName" required />
                  </TextField>

                  {/* Organizer Email */}
                  <TextField
                    className="w-full"
                    defaultValue={manageData.organizerEmail}
                  >
                    <Label>Organizer Email</Label>
                    <Input name="organizerEmail" type="email" required />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" form="edit-event-form">
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditManage;
