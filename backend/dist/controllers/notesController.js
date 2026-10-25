"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listNotes = listNotes;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;
const supabase_1 = require("../services/supabase");
async function listNotes(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('notes')
        .select('*')
        .eq('user_id', req.user.id)
        .order('z_index', { ascending: true });
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.json(data);
}
async function createNote(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('notes')
        .insert({ ...req.body, user_id: req.user.id })
        .select()
        .single();
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(201).json(data);
}
async function updateNote(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('notes')
        .update({ ...req.body, updated_at: new Date().toISOString() })
        .eq('id', req.params.id)
        .eq('user_id', req.user.id)
        .select()
        .single();
    if (error || !data) {
        res.status(404).json({ error: error?.message || 'Note not found' });
        return;
    }
    res.json(data);
}
async function deleteNote(req, res) {
    const { error } = await supabase_1.supabase
        .from('notes')
        .delete()
        .eq('id', req.params.id)
        .eq('user_id', req.user.id);
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(204).send();
}
