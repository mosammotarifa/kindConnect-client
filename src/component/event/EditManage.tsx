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
import { getTokenFromClient } from "@/lib/tokenFromClient";

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
      organizerName: String(formData.get("organizerName")),
      email:manageData.email
    };
    try {
      if (!manageData._id) {
        toast.error("Event ID not found");
        return;
      }
      const token = await getTokenFromClient();
      const bookingdata = await editManageEventData(
        manageData._id,
        bookingDataEdit,
        token
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
        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-2 text-sm font-semibold text-amber-600 transition hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-400 dark:hover:bg-amber-950"
        >
          <Pencil size={17} />
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop className="bg-black/50 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl sm:max-w-2xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="border-b border-border bg-muted/40 px-6 py-6 sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                  <Pencil size={22} />
                </div>

                <div>
                  <Modal.Heading className="text-xl font-bold text-foreground sm:text-2xl">
                    Edit Your Event
                  </Modal.Heading>

                  <p className="mt-1 text-sm text-text-muted">
                    Update your event information below.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="max-h-[65vh] overflow-y-auto p-6 sm:p-8">
              <Surface variant="default">
                <form
                  id="edit-event-form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
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
                   defaultValue={String(manageData.capacity)}
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
                </form>
              </Surface>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer className="flex flex-col-reverse gap-3 border-t border-border bg-muted/40 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
              <Button
                slot="close"
                variant="secondary"
                className="w-full rounded-xl px-6 py-3 font-semibold sm:w-auto"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                form="edit-event-form"
                className="w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 sm:w-auto"
              >
                <Pencil size={16} />
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditManage;
