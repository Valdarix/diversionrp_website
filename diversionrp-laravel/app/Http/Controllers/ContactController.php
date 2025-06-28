<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Handle contact form submissions.
     */
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'reason' => 'required|string',
            'message' => 'required|string',
        ]);

        $to = 'justrp@valdarixgames.com';
        $subject = "Contact Form Submission: {$validated['reason']}";
        $body = "Name: {$validated['name']}\n".
                "Email: {$validated['email']}\n".
                "Reason: {$validated['reason']}\n\n".
                "Message:\n{$validated['message']}";

        $headers = "From: {$validated['email']}";

        if (mail($to, $subject, $body, $headers)) {
            return response()->json(['status' => 'Message sent successfully!']);
        }

        return response()->json(['status' => 'Failed to send the message.'], 500);
    }
}
