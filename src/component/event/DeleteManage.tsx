"use client";
import { deleteManageEventData } from "@/lib/action";
import { Event } from "@/type/type";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const DeleteManage = ({ manageData }: { manageData: Event }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const deletedata = await deleteManageEventData(manageData._id);
      toast.success("successfully deleted");
      console.log(deletedata);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("failed to delete");
    }
  };
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <button className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-900 dark:bg-red-950/50 dark:text-red-400 dark:hover:bg-red-950">
          <Trash2 size={17} />
          Delete
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header className="px-6 pt-7">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-red-50 ring-8 ring-red-50/50 dark:bg-red-950/60 dark:ring-red-950/30">
                <Trash2 className="size-6 text-red-600 dark:text-red-400" />
              </div>

              <AlertDialog.Heading className="text-xl font-bold tracking-tight text-foreground">
                Delete this event?
              </AlertDialog.Heading>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                Are you sure you want to permanently delete this event? This
                action cannot be undone.
              </p>
            </AlertDialog.Header>

            <AlertDialog.Body className="px-6 py-5">
              <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-red-950">
                    <Trash2 className="size-4 text-red-500 dark:text-red-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                      Event to be deleted
                    </p>
                    <p className="mt-1 break-words text-sm font-bold text-foreground">
                      {manageData.title}
                    </p>
                  </div>
                </div>
              </div>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex flex-col-reverse gap-3 border-t border-border bg-muted/50 px-6 py-5 sm:flex-row sm:justify-end">
              <Button
                slot="close"
                variant="tertiary"
                className="w-full rounded-xl border border-border bg-card px-5 py-2.5 font-semibold text-foreground transition hover:bg-muted sm:w-auto"
              >
                Cancel
              </Button>

              <Button
                slot="close"
                variant="danger"
                onClick={handleDelete}
                className="w-full rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-red-700 sm:w-auto"
              >
                <Trash2 size={16} />
                Delete Event
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteManage;
